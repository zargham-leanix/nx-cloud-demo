import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo41Component } from './lib38-demo41.component';

describe('Lib38Demo41Component', () => {
  let component: Lib38Demo41Component;
  let fixture: ComponentFixture<Lib38Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
