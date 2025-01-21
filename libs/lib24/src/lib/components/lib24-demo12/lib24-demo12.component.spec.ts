import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo12Component } from './lib24-demo12.component';

describe('Lib24Demo12Component', () => {
  let component: Lib24Demo12Component;
  let fixture: ComponentFixture<Lib24Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
