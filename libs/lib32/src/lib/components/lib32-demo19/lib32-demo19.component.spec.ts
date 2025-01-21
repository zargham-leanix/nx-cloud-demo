import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo19Component } from './lib32-demo19.component';

describe('Lib32Demo19Component', () => {
  let component: Lib32Demo19Component;
  let fixture: ComponentFixture<Lib32Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
