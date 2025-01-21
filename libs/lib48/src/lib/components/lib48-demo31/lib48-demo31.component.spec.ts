import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo31Component } from './lib48-demo31.component';

describe('Lib48Demo31Component', () => {
  let component: Lib48Demo31Component;
  let fixture: ComponentFixture<Lib48Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
