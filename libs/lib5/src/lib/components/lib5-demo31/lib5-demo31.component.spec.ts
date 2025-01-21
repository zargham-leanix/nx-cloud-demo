import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo31Component } from './lib5-demo31.component';

describe('Lib5Demo31Component', () => {
  let component: Lib5Demo31Component;
  let fixture: ComponentFixture<Lib5Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
