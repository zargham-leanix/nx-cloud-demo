import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo29Component } from './lib21-demo29.component';

describe('Lib21Demo29Component', () => {
  let component: Lib21Demo29Component;
  let fixture: ComponentFixture<Lib21Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
