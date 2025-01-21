import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo43Component } from './lib7-demo43.component';

describe('Lib7Demo43Component', () => {
  let component: Lib7Demo43Component;
  let fixture: ComponentFixture<Lib7Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
