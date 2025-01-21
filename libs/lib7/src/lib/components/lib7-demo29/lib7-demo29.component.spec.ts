import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo29Component } from './lib7-demo29.component';

describe('Lib7Demo29Component', () => {
  let component: Lib7Demo29Component;
  let fixture: ComponentFixture<Lib7Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
