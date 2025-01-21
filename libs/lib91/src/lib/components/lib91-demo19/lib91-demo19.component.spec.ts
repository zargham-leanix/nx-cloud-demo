import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo19Component } from './lib91-demo19.component';

describe('Lib91Demo19Component', () => {
  let component: Lib91Demo19Component;
  let fixture: ComponentFixture<Lib91Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
