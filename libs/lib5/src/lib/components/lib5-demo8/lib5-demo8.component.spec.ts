import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo8Component } from './lib5-demo8.component';

describe('Lib5Demo8Component', () => {
  let component: Lib5Demo8Component;
  let fixture: ComponentFixture<Lib5Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
