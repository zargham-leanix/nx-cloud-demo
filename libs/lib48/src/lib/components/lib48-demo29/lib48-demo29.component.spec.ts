import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo29Component } from './lib48-demo29.component';

describe('Lib48Demo29Component', () => {
  let component: Lib48Demo29Component;
  let fixture: ComponentFixture<Lib48Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
