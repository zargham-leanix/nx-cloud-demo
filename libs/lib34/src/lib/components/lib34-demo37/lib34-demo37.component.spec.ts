import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo37Component } from './lib34-demo37.component';

describe('Lib34Demo37Component', () => {
  let component: Lib34Demo37Component;
  let fixture: ComponentFixture<Lib34Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
