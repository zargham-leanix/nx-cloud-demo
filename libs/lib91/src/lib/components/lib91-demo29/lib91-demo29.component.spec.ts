import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo29Component } from './lib91-demo29.component';

describe('Lib91Demo29Component', () => {
  let component: Lib91Demo29Component;
  let fixture: ComponentFixture<Lib91Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
