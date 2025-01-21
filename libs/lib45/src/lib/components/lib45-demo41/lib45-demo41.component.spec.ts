import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo41Component } from './lib45-demo41.component';

describe('Lib45Demo41Component', () => {
  let component: Lib45Demo41Component;
  let fixture: ComponentFixture<Lib45Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
