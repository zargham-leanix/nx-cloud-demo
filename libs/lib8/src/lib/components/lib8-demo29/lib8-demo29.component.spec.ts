import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo29Component } from './lib8-demo29.component';

describe('Lib8Demo29Component', () => {
  let component: Lib8Demo29Component;
  let fixture: ComponentFixture<Lib8Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
