import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo29Component } from './lib54-demo29.component';

describe('Lib54Demo29Component', () => {
  let component: Lib54Demo29Component;
  let fixture: ComponentFixture<Lib54Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
