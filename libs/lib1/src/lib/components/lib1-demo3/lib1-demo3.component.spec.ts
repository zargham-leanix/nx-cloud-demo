import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo3Component } from './lib1-demo3.component';

describe('Lib1Demo3Component', () => {
  let component: Lib1Demo3Component;
  let fixture: ComponentFixture<Lib1Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
