import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo29Component } from './lib14-demo29.component';

describe('Lib14Demo29Component', () => {
  let component: Lib14Demo29Component;
  let fixture: ComponentFixture<Lib14Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
