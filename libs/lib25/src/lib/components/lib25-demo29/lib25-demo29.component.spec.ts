import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo29Component } from './lib25-demo29.component';

describe('Lib25Demo29Component', () => {
  let component: Lib25Demo29Component;
  let fixture: ComponentFixture<Lib25Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
