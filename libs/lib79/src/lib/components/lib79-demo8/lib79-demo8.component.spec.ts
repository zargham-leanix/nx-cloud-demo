import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo8Component } from './lib79-demo8.component';

describe('Lib79Demo8Component', () => {
  let component: Lib79Demo8Component;
  let fixture: ComponentFixture<Lib79Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
