import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo41Component } from './lib97-demo41.component';

describe('Lib97Demo41Component', () => {
  let component: Lib97Demo41Component;
  let fixture: ComponentFixture<Lib97Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
