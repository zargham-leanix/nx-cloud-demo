import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo8Component } from './lib45-demo8.component';

describe('Lib45Demo8Component', () => {
  let component: Lib45Demo8Component;
  let fixture: ComponentFixture<Lib45Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
