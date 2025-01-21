import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo41Component } from './lib51-demo41.component';

describe('Lib51Demo41Component', () => {
  let component: Lib51Demo41Component;
  let fixture: ComponentFixture<Lib51Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
