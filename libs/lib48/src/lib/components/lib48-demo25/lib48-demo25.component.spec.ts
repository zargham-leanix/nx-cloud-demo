import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo25Component } from './lib48-demo25.component';

describe('Lib48Demo25Component', () => {
  let component: Lib48Demo25Component;
  let fixture: ComponentFixture<Lib48Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
