import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo37Component } from './lib7-demo37.component';

describe('Lib7Demo37Component', () => {
  let component: Lib7Demo37Component;
  let fixture: ComponentFixture<Lib7Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
