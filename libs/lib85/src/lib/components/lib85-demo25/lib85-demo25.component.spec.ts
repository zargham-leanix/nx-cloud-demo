import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo25Component } from './lib85-demo25.component';

describe('Lib85Demo25Component', () => {
  let component: Lib85Demo25Component;
  let fixture: ComponentFixture<Lib85Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
