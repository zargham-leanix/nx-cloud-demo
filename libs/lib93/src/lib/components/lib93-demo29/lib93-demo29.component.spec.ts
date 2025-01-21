import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo29Component } from './lib93-demo29.component';

describe('Lib93Demo29Component', () => {
  let component: Lib93Demo29Component;
  let fixture: ComponentFixture<Lib93Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
