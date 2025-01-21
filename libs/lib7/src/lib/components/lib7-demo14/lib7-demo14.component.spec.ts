import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo14Component } from './lib7-demo14.component';

describe('Lib7Demo14Component', () => {
  let component: Lib7Demo14Component;
  let fixture: ComponentFixture<Lib7Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
