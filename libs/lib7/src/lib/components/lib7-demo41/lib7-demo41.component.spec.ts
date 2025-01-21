import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo41Component } from './lib7-demo41.component';

describe('Lib7Demo41Component', () => {
  let component: Lib7Demo41Component;
  let fixture: ComponentFixture<Lib7Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
