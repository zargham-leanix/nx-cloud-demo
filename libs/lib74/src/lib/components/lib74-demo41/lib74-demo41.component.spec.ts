import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo41Component } from './lib74-demo41.component';

describe('Lib74Demo41Component', () => {
  let component: Lib74Demo41Component;
  let fixture: ComponentFixture<Lib74Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
