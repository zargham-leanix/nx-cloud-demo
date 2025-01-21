import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo12Component } from './lib7-demo12.component';

describe('Lib7Demo12Component', () => {
  let component: Lib7Demo12Component;
  let fixture: ComponentFixture<Lib7Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
