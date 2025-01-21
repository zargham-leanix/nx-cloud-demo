import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo3Component } from './lib3-demo3.component';

describe('Lib3Demo3Component', () => {
  let component: Lib3Demo3Component;
  let fixture: ComponentFixture<Lib3Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
