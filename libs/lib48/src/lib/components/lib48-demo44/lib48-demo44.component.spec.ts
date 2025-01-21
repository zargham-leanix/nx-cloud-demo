import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo44Component } from './lib48-demo44.component';

describe('Lib48Demo44Component', () => {
  let component: Lib48Demo44Component;
  let fixture: ComponentFixture<Lib48Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
