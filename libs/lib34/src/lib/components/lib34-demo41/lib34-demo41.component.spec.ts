import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo41Component } from './lib34-demo41.component';

describe('Lib34Demo41Component', () => {
  let component: Lib34Demo41Component;
  let fixture: ComponentFixture<Lib34Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
