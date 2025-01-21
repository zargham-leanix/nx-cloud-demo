import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo41Component } from './lib2-demo41.component';

describe('Lib2Demo41Component', () => {
  let component: Lib2Demo41Component;
  let fixture: ComponentFixture<Lib2Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
