import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo29Component } from './lib79-demo29.component';

describe('Lib79Demo29Component', () => {
  let component: Lib79Demo29Component;
  let fixture: ComponentFixture<Lib79Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
