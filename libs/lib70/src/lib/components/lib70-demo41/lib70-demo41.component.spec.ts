import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo41Component } from './lib70-demo41.component';

describe('Lib70Demo41Component', () => {
  let component: Lib70Demo41Component;
  let fixture: ComponentFixture<Lib70Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
