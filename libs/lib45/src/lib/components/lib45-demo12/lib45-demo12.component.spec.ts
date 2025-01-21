import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo12Component } from './lib45-demo12.component';

describe('Lib45Demo12Component', () => {
  let component: Lib45Demo12Component;
  let fixture: ComponentFixture<Lib45Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
