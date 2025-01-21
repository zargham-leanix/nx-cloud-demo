import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo12Component } from './lib14-demo12.component';

describe('Lib14Demo12Component', () => {
  let component: Lib14Demo12Component;
  let fixture: ComponentFixture<Lib14Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
