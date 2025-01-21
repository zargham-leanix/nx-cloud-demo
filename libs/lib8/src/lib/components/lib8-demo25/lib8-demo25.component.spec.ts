import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo25Component } from './lib8-demo25.component';

describe('Lib8Demo25Component', () => {
  let component: Lib8Demo25Component;
  let fixture: ComponentFixture<Lib8Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
