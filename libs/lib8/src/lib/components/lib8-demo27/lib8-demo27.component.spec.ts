import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo27Component } from './lib8-demo27.component';

describe('Lib8Demo27Component', () => {
  let component: Lib8Demo27Component;
  let fixture: ComponentFixture<Lib8Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
