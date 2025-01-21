import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo29Component } from './lib42-demo29.component';

describe('Lib42Demo29Component', () => {
  let component: Lib42Demo29Component;
  let fixture: ComponentFixture<Lib42Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
