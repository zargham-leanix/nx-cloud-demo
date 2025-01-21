import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo8Component } from './lib70-demo8.component';

describe('Lib70Demo8Component', () => {
  let component: Lib70Demo8Component;
  let fixture: ComponentFixture<Lib70Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
