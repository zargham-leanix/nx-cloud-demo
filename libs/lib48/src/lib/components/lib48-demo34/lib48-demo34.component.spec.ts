import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo34Component } from './lib48-demo34.component';

describe('Lib48Demo34Component', () => {
  let component: Lib48Demo34Component;
  let fixture: ComponentFixture<Lib48Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
