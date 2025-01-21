import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo12Component } from './lib5-demo12.component';

describe('Lib5Demo12Component', () => {
  let component: Lib5Demo12Component;
  let fixture: ComponentFixture<Lib5Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
