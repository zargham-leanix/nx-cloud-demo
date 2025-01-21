import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo42Component } from './lib7-demo42.component';

describe('Lib7Demo42Component', () => {
  let component: Lib7Demo42Component;
  let fixture: ComponentFixture<Lib7Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
