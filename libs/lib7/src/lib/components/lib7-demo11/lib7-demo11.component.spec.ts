import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo11Component } from './lib7-demo11.component';

describe('Lib7Demo11Component', () => {
  let component: Lib7Demo11Component;
  let fixture: ComponentFixture<Lib7Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
