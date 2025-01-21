import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo29Component } from './lib24-demo29.component';

describe('Lib24Demo29Component', () => {
  let component: Lib24Demo29Component;
  let fixture: ComponentFixture<Lib24Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
