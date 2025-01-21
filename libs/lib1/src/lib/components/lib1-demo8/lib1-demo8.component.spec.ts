import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo8Component } from './lib1-demo8.component';

describe('Lib1Demo8Component', () => {
  let component: Lib1Demo8Component;
  let fixture: ComponentFixture<Lib1Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
