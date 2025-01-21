import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo19Component } from './lib48-demo19.component';

describe('Lib48Demo19Component', () => {
  let component: Lib48Demo19Component;
  let fixture: ComponentFixture<Lib48Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
