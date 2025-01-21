import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo46Component } from './lib8-demo46.component';

describe('Lib8Demo46Component', () => {
  let component: Lib8Demo46Component;
  let fixture: ComponentFixture<Lib8Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
