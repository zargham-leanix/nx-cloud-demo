import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo29Component } from './lib76-demo29.component';

describe('Lib76Demo29Component', () => {
  let component: Lib76Demo29Component;
  let fixture: ComponentFixture<Lib76Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
