import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo41Component } from './lib98-demo41.component';

describe('Lib98Demo41Component', () => {
  let component: Lib98Demo41Component;
  let fixture: ComponentFixture<Lib98Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
