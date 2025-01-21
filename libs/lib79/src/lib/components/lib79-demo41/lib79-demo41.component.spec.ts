import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo41Component } from './lib79-demo41.component';

describe('Lib79Demo41Component', () => {
  let component: Lib79Demo41Component;
  let fixture: ComponentFixture<Lib79Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
